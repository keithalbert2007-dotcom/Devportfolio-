 function showSection(sectionId) {
            const sections = document.querySelectorAll('.tab-content');
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');
        }
        function showProject(projectId) {
            const projects = document.querySelectorAll('#projects .tab-content');
            projects.forEach(project => project.classList.remove('active'));
            document.getElementById(projectId).classList.add('active');
            const buttons = document.querySelectorAll('.tab-button');
            buttons.forEach(button => button.classList.remove('active'));
            event.target.classList.add('active');
        }