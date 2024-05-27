window.onload = function() {
    document.getElementById("logo").src = "https://github.com/Nader-08n/web/blob/main/%D8%A7%D9%84%D8%B4%D8%B9%D8%A7%D8%B1.png";
};

function toggleSubSections(section) {
    var subSections = document.getElementById(section + "SubSections");
    if (subSections.style.display === "none") {
        subSections.style.display = "block";
    } else {
        subSections.style.display = "none";
    }
}

function playVideo(language) {
    let videoUrl;
    switch (language) {
        case 'python':
            videoUrl = 'https://drive.google.com/file/d/1po-eqCXjctdrCZRymIuQlKivKdEPugUq/view?usp=sharing';
            break;
        case 'java':
            videoUrl = 'https://drive.google.com/file/d/1H9FXyzovv6srrdQYoEE4hKczDYQtlJi0/view?usp=sharing';
            break;
        case 'javascript':
            videoUrl = 'https://drive.google.com/file/d/1v-bG5pzX6EAuS5is_Ncfi6UFH_4gLoqy/view?usp=sharing';
            break;
        case 'HTML':
                videoUrl = 'https://drive.google.com/file/d/1mAqGd1wBcjeWciE6ah60X9PYD4cCUwwp/view?usp=sharing';
                break;
        case 'CSS':
                videoUrl = 'https://drive.google.com/file/d/1CktCkVBLdQvEiyhytFN7H0W7xFU1mJc2/view?usp=sharing';
                break;
    }
    window.location.href = videoUrl;
}

function playDesignVideo() {
    var selectedProgram = document.getElementById("designPrograms").value;
    let videoUrl;
    switch (selectedProgram) {
        case 'illustrator':
            videoUrl = 'https://drive.google.com/file/d/1N7FM7HZW5y0IqXSWNaHOG0bVCABnfZL6/view?usp=sharing';
            break;
        case 'photoshop':
            videoUrl = 'https://drive.google.com/file/d/1R_44pCEBms6oy9C-8QSxeEyY9ubHOcE8/view?usp=sharing';
            break;
        case 'aftereffects':
            videoUrl = 'https://drive.google.com/file/d/10uE4Hoss6ZEmXJlaRiqun3e1OW3JnfQ0/view?usp=sharing';
            break;
        case 'premiere':
            videoUrl = 'https://drive.google.com/file/d/1hL8WkbTlcFNZey8gPw82Y4b2aJfJWVnu/view?usp=sharing';
            break;
        case 'GIMP':
             videoUrl = 'https://drive.google.com/file/d/10AcYHaxkAkko7qusf5F1SvUwbAJWmMhT/view?usp=sharing';
                break;
         case 'capcut':
            videoUrl = 'https://drive.google.com/file/d/1FKM9EpX2Gfjx7ALmdoT-j_U3dcTuVoMV/view?usp=sharing';
                break;
    }
    window.location.href = videoUrl;
}
