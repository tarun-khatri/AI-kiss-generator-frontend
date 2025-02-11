import React, { useState, useRef } from 'react';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const UploadSection = ({ setVideoUrl }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [videoPreviewUrl, setVideoPreviewUrl] = useState('');
  const pollIntervalRef = useRef(null);
  const maxPolls = useRef(0);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setErrorMsg('');
  };

  // Poll for job status every 15 seconds using the PixVerse API response format.
  const pollJobStatus = async (jobId) => {
    try {
      const response = await axios.get(`${API_URL}/api/videos/job-status/${jobId}`);
      console.log("Full polling response:", JSON.stringify(response.data, null, 2));
      
      const jobResult = response.data.Resp || response.data.resp;
      if (jobResult) {
        // Status: 1 = successful, 5 = generating, 7 = moderation failed, 8 = generation failed.
        if (jobResult.status === 1 && jobResult.url) {
          console.log("Video URL received:", jobResult.url);
          setVideoPreviewUrl(jobResult.url);
          setVideoUrl(jobResult.url);
          setUploading(false);
          clearInterval(pollIntervalRef.current);
        } else if (jobResult.status === 7 || jobResult.status === 8) {
          setErrorMsg("Video generation failed.");
          setUploading(false);
          clearInterval(pollIntervalRef.current);
        } else if (jobResult.status === 5) {
          console.log("Video is still generating. Current status:", jobResult.status);
          maxPolls.current += 1;
          if (maxPolls.current > 4) {
            setErrorMsg("Video generation timed out. Please try again.");
            setUploading(false);
            clearInterval(pollIntervalRef.current);
          }
        }
      } else {
        console.error("Job result missing 'Resp' or 'resp' field.");
      }
    } catch (error) {
      console.error("Polling error:", error);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setErrorMsg("Please select an image file first.");
      return;
    }
    setUploading(true);
    setErrorMsg('');
    setVideoPreviewUrl('');
    maxPolls.current = 0;
    
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      console.log("Uploading image...");
      const response = await axios.post(`${API_URL}/api/videos/generate-video`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      console.log("Upload response:", JSON.stringify(response.data, null, 2));

      // Check if a top-level videoUrl exists
      if (response.data.videoUrl) {
        console.log("Video URL received directly:", response.data.videoUrl);
        setVideoPreviewUrl(response.data.videoUrl);
        setVideoUrl(response.data.videoUrl);
        setUploading(false);
      }
      // Otherwise, check for job ID in the response.
      else if (response.data.Resp || response.data.resp) {
        const pixverseResponse = response.data.Resp || response.data.resp;
        if (pixverseResponse.video_id || pixverseResponse.id) {
          const jobId = pixverseResponse.video_id || pixverseResponse.id;
          console.log("Job ID received:", jobId);
          pollIntervalRef.current = setInterval(() => {
            pollJobStatus(jobId);
          }, 15000);
        } else {
          setErrorMsg("Unexpected response from the server.");
          setUploading(false);
        }
      } else {
        setErrorMsg("Unexpected response from the server.");
        setUploading(false);
      }
    } catch (error) {
      console.error("Upload error:", error);
      setErrorMsg("Failed to upload and process the image. Please try again.");
      setUploading(false);
    }
  };

  return (
    <div className="bg-white shadow rounded p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload a photo with your crush to see MAGIC</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700"
      />
      {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-4 w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200"
      >
        {uploading ? 'MAGIC is on the way...' : 'Do the MAGIC'}
      </button>

      {videoPreviewUrl && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Generated Video:</h3>
          <div className="relative rounded-lg overflow-hidden bg-gray-100">
            <video 
              controls 
              className="w-full rounded"
              src={videoPreviewUrl}
              onError={() => setErrorMsg("Failed to load video. Please try again.")}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <a 
            href={videoPreviewUrl} 
            download="generated-video.mp4"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Download Video
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadSection;
