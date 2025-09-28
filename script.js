document.addEventListener('DOMContentLoaded', () => {
    const petVideo = document.getElementById('pet-video');
    const idleVideo = document.getElementById('idle-video');
    const buttons = document.querySelectorAll('.controls button');
    
    // 设置待机视频
    idleVideo.src = 'videos/standby.mp4';
    
    // 交互按钮点击事件
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const videoName = button.getAttribute('data-video');
            
            // 根据按钮类型设置对应的视频
            if (videoName === 'touch') {
                petVideo.src = 'videos/touch.mp4';
            } else if (videoName === 'feed') {
                petVideo.src = 'videos/feed.mp4';
            } else if (videoName === 'play') {
                petVideo.src = 'videos/play.mp4';
            }
            
            // 隐藏待机视频，显示交互视频
            idleVideo.classList.remove('active');
            idleVideo.classList.add('hidden');
            petVideo.classList.remove('hidden');
            petVideo.classList.add('active');
            
            petVideo.loop = false; // 确保交互视频不循环播放
            petVideo.play();
            
            // 交互视频播放结束后，切换回待机状态
            petVideo.onended = () => {
                petVideo.classList.remove('active');
                petVideo.classList.add('hidden');
                idleVideo.classList.remove('hidden');
                idleVideo.classList.add('active');
                idleVideo.play();
            };
        });
    });
});