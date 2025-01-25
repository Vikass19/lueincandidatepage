 // Handle the video file selection and preview
 document.getElementById('resume-upload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const videoPlayer = document.getElementById('video-player');
  const videoSource = document.getElementById('video-source');
  const uploadStatus = document.getElementById('upload-status');
  const videoContainer = document.getElementById('video-container');

  if (file) {
    // Create a URL for the selected video file
    const fileURL = URL.createObjectURL(file);
    
    // Set the video source
    videoSource.src = fileURL;
    videoPlayer.load();  // Reload video with new source
    videoContainer.style.display = 'block';  // Show the video player
    uploadStatus.style.display = 'none';  // Hide the upload status message

    // Reset the status message
    uploadStatus.innerHTML = 'Video resume uploaded successfully!';
    uploadStatus.style.display = 'block';
  }
});

 // Functionality to Add Certifications
 document.getElementById('add-certification').addEventListener('click', function() {
  const newCert = prompt('Enter new certification:');
  if (newCert) {
    const certList = document.getElementById('certification-list');
    const listItem = document.createElement('li');
    listItem.textContent = newCert;
    certList.appendChild(listItem);
  }
});

// Functionality to Add Achievements
document.getElementById('add-achievement').addEventListener('click', function() {
  const newAch = prompt('Enter new achievement:');
  if (newAch) {
    const achList = document.getElementById('achievements-list');
    const listItem = document.createElement('li');
    listItem.textContent = newAch;
    achList.appendChild(listItem);
  }
});

// Functionality to Update Video Source and Upload Status
document.getElementById('resume-upload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const videoSrc = URL.createObjectURL(file);
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    const uploadStatus = document.getElementById('upload-status');

    videoSource.src = videoSrc;
    videoPlayer.load();
    uploadStatus.textContent = 'Video uploaded successfully!';
  }
});
    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', function() {
      alert('You have successfully logged out!');
      window.location.href = 'LoginModule.html'; // Change this URL to your desired destination
    });


     // Functionality to Add Certifications
  document.getElementById('add-certification').addEventListener('click', function() {
    const newCert = prompt('Enter new certification:');
    if (newCert) {
      const certList = document.getElementById('certification-list');
      const listItem = document.createElement('li');
      listItem.textContent = newCert;
      certList.appendChild(listItem);
    }
  });

  