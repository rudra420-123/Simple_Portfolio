import React from 'react';
import { Container, Typography, Grid, Button, Avatar, Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', paddingTop: 6, paddingBottom: 6, backgroundColor: '#121212' }}>
        <Avatar
          alt="Profile Photo"
          src="assets/Rudra.jpg"
          sx={{ width: 160, height: 160, margin: 'auto', border: '5px solid #90caf9' }}
        />
        <Typography variant="h2" color="#90caf9" gutterBottom>
            Welcome To My Portfolio
        </Typography>
        <Typography variant="h4" color="#90caf9" gutterBottom>
          Hi, I'm Rudra Prasad Nayak
        </Typography>
        <Typography variant="h6" color="#e0e0e0" paragraph>
          Full Stack Developer | Designer | Tech Enthusiast
        </Typography>
        <Typography variant="body1" color="#e0e0e0" paragraph>
          I'm Passionate about learning new technologies, I'm constantly exploring different areas to build a strong foundation for a versatile career in tech.
        </Typography>
        <Button variant="contained" color="secondary" href="#contact" sx={{ marginTop: 2 }}>
          Contact Me
        </Button>
        <Box sx={{ marginTop: 2 }}>
          <IconButton href="https://github.com/rudra420-123" target='_blank' rel='noopener noreferrer' sx={{ color: '#90caf9' }}>
            <GitHub />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/rudra-prasad-nayak420" target='_blank' rel='noopener noreferrer' sx={{ color: '#90caf9' }}>
            <LinkedIn />
          </IconButton>
          <IconButton href="mailto:dipu13562@gmail.com" target='_blank' rel='noopener noreferrer' sx={{ color: '#90caf9' }}>
            <Email />
          </IconButton>
        </Box>
      </Box>

      {/* About Section */}
      <Box sx={{ backgroundColor: '#1d1d1d', paddingTop: 6, paddingBottom: 6 }} id="about">
      <Container>
        <Typography variant="h4" color="#90caf9" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" color="#e0e0e0" paragraph>
          Hi, I'm Rudra Prasad Nayak, a final-year BCA student with a passion for technology and a drive to master a wide range of skills in the IT industry. My goal is to become a versatile, all-rounder professional, capable of adapting to and excelling in various technological domains. From front-end development to back-end programming, database management to cloud computing, I strive to build expertise in every aspect of IT. I believe that continuous learning and hands-on experience are key to success, and I am committed to growing my knowledge in emerging technologies to stay ahead in this dynamic field.
        </Typography>
      </Container>
      </Box>

      {/* Skills Section */}
      <Box sx={{ backgroundColor: '#121212', paddingTop: 6, paddingBottom: 6 }} id="skills">
        <Container>
          <Typography variant="h4" color="#f50057" gutterBottom>
            My Skills
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="#90caf9">
                Frontend Development
              </Typography>
              <Typography variant="body2" color="#e0e0e0">HTML, CSS, JavaScript, React</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="#90caf9">
                Backend Development
              </Typography>
              <Typography variant="body2" color="#e0e0e0">Node.js, Express, MongoDB</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="#90caf9">
                Tools & Technologies
              </Typography>
              <Typography variant="body2" color="#e0e0e0">Git, GitHub, Netlify</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box sx={{ backgroundColor: '#1d1d1d', paddingTop: 6, paddingBottom: 6 }} id="projects">
      <Container>
        <Typography variant="h4" color="#90caf9" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ border: '2px solid #f50057', padding: 2, borderRadius: 2 }}>
              <Typography variant="h6" color="#f50057" gutterBottom>
                Expanding_Cards 
              </Typography>
              <Typography variant="body2" color="#e0e0e0" paragraph>
                  Expanding Cards is a dynamic web component that uses HTML, CSS, and JavaScript to create interactive, visually appealing card elements. The cards expand and display more content when clicked, enhancing user engagement with smooth animations and responsive design.
              </Typography>
              <Button variant="contained" color="secondary" href="https://rudra420-123.github.io/Expanding_Cards/" target='_blank' rel='noopener noreferrer'>
                View Project
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box sx={{ border: '2px solid #f50057', padding: 2, borderRadius: 2 }}>
              <Typography variant="h6" color="#f50057" gutterBottom>
                Password_Strength_Background 
              </Typography>
              <Typography variant="body2" color="#e0e0e0" paragraph>
                The password-strength-background project provides a visual indicator for password strength by changing the blur the background of a password input field. It helps users assess password security with color-coded feedback, making it easier to create strong passwords.
              </Typography>
              <Button variant="contained" color="secondary" href="https://rudra420-123.github.io/Password_Strength_Background/" target='_blank' rel='noopener noreferrer'>
                View Project
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box sx={{ border: '2px solid #f50057', padding: 2, borderRadius: 2 }}>
              <Typography variant="h6" color="#f50057" gutterBottom>
                Movie_Ticket_Booking 
              </Typography>
              <Typography variant="body2" color="#e0e0e0" paragraph>
              A comprehensive web application designed to streamline the process of booking movie tickets online. This project allows users to browse movies, check showtimes, select seats, and securely purchase tickets with ease.
              </Typography>
              <Button variant="contained" color="secondary" href="https://rudra420-123.github.io/Movie_Ticket_Booking/" target='_blank' rel='noopener noreferrer'>
                View Project
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box sx={{ border: '2px solid #f50057', padding: 2, borderRadius: 2 }}>
              <Typography variant="h6" color="#f50057" gutterBottom>
                Simple_Calculator
              </Typography>
              <Typography variant="body2" color="#e0e0e0" paragraph>
                A basic calculator web application built using HTML, CSS, and JavaScript. It supports essential arithmetic operations such as addition, subtraction, multiplication, and division, featuring a clean and user-friendly interface.
              </Typography>
              <Button variant="contained" color="secondary" href="https://rudra420-123.github.io/Simple_Calculator/" target='_blank' rel='noopener noreferrer'>
                View Project
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ backgroundColor: '#121212', paddingTop: 6, paddingBottom: 6 }} id="contact">
        <Container>
          <Typography variant="h4" color="#f50057" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1" color="#e0e0e0" paragraph>
            I would love to hear from you! Whether you have a question, want to discuss a project, or just want to connect, feel free to reach out. I'm always open to new opportunities, collaborations, and feedback. Simply fill out the form below or send me an email, and I'll get back to you as soon as possible. Looking forward to connecting with you!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:dipu13562@gmail.com">
            Send Email
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Home;