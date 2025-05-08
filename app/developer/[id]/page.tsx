'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Box, Typography, Container, Grid, Card, Avatar, Chip, Stack, IconButton, Button, AspectRatio, Tabs, TabList, Tab, TabPanel, Divider } from '@mui/joy';
import { MessageCircle, Heart, MapPin, Calendar, Briefcase, ExternalLink, Share2, Github, Linkedin, Twitter, Mail, Download, BookOpen, Code, Monitor, HardDrive } from 'lucide-react';

// Sample developer data
const developersData = [
  {
    id: 1,
    name: 'Alex Johnson',
    title: 'Full Stack Developer',
    location: 'San Francisco, CA',
    experience: '5 years',
    availability: 'Full-time',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    coverImage: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Redux', 'Express.js', 'GraphQL', 'Next.js', 'Jest'],
    rating: 4.9,
    reviews: 28,
    isAvailable: true,
    bio: 'Full stack developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud architecture. I'm passionate about creating clean, maintainable code and delivering exceptional user experiences.',
    hourlyRate: '$85/hr',
    languages: ['English (Native)', 'Spanish (Conversational)'],
    education: [
      {
        degree: 'B.S. Computer Science',
        institution: 'Stanford University',
        year: '2018',
      },
    ],
    workExperience: [
      {
        title: 'Senior Software Engineer',
        company: 'TechCorp',
        duration: 'Jan 2020 - Present',
        description: 'Led development of customer-facing applications with React and Node.js. Implemented CI/CD pipelines and microservices architecture.',
      },
      {
        title: 'Full Stack Developer',
        company: 'InnovateSoft',
        duration: 'Mar 2018 - Dec 2019',
        description: 'Developed and maintained web applications for enterprise clients. Collaborated with design team to implement responsive UIs.',
      },
    ],
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'A full-featured online store with product management, cart functionality, and payment processing.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: '#',
      },
      {
        title: 'Content Management System',
        description: 'Custom CMS for a publishing company with rich text editing, media management, and role-based access control.',
        image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'AWS S3'],
        link: '#',
      },
      {
        title: 'Fleet Management Dashboard',
        description: 'Real-time dashboard for monitoring vehicle fleets with location tracking, maintenance schedules, and analytics.',
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        technologies: ['React', 'Redux', 'Socket.io', 'Google Maps API'],
        link: '#',
      },
    ],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      portfolio: 'https://alexjohnson.dev',
    },
  },
];

export default function DeveloperProfile({ params }: { params: { id: string } }) {
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Find developer by ID
  const developer = developersData.find((dev) => dev.id === parseInt(params.id)) || developersData[0];

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.body',
        pb: 8,
      }}
    >
      {/* Cover Image */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '180px', md: '280px' },
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <AspectRatio ratio="21/9" sx={{ minHeight: '100%' }}>
          <img
            src={developer.coverImage}
            alt="Cover"
            style={{ objectFit: 'cover', width: '100%' }}
          />
        </AspectRatio>
      </Box>

      <Container maxWidth="lg">
        {/* Profile Header */}
        <Box
          sx={{
            mt: { xs: -8, md: -12 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Card
            variant="outlined"
            sx={{
              p: { xs: 2, md: 4 },
              borderRadius: 'lg',
              mb: 4,
            }}
          >
            <Grid container spacing={3} alignItems="flex-end">
              <Grid xs={12} md={8}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar
                    src={developer.avatar}
                    alt={developer.name}
                    sx={{
                      width: { xs: 96, md: 120 },
                      height: { xs: 96, md: 120 },
                      border: '4px solid',
                      borderColor: 'background.surface',
                    }}
                  />
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                      <Typography
                        level="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: '1.5rem', md: '2rem' },
                        }}
                      >
                        {developer.name}
                      </Typography>
                      {developer.isAvailable && (
                        <Chip
                          variant="soft"
                          size="sm"
                          color="success"
                          sx={{
                            borderRadius: 'pill',
                          }}
                        >
                          Available for hire
                        </Chip>
                      )}
                    </Box>
                    <Typography
                      level="title-lg"
                      sx={{
                        color: 'text.secondary',
                        mb: 1,
                      }}
                    >
                      {developer.title}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <MapPin size={16} />
                        <Typography level="body-sm">{developer.location}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Briefcase size={16} />
                        <Typography level="body-sm">{developer.experience} experience</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Calendar size={16} />
                        <Typography level="body-sm">{developer.availability}</Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 1.5,
                      }}
                    >
                      <IconButton
                        component="a"
                        href={developer.social.github}
                        target="_blank"
                        variant="plain"
                        color="neutral"
                        size="sm"
                      >
                        <Github size={18} />
                      </IconButton>
                      <IconButton
                        component="a"
                        href={developer.social.linkedin}
                        target="_blank"
                        variant="plain"
                        color="neutral"
                        size="sm"
                      >
                        <Linkedin size={18} />
                      </IconButton>
                      <IconButton
                        component="a"
                        href={developer.social.twitter}
                        target="_blank"
                        variant="plain"
                        color="neutral"
                        size="sm"
                      >
                        <Twitter size={18} />
                      </IconButton>
                      <IconButton
                        component="a"
                        href={developer.social.portfolio}
                        target="_blank"
                        variant="plain"
                        color="neutral"
                        size="sm"
                      >
                        <ExternalLink size={18} />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid xs={12} md={4}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'row', md: 'column' },
                    gap: 2,
                    justifyContent: { xs: 'flex-start', md: 'flex-end' },
                    alignItems: { xs: 'center', md: 'flex-end' },
                    mt: { xs: 0, md: 2 },
                  }}
                >
                  <Typography
                    level="title-lg"
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    {developer.hourlyRate}
                  </Typography>
                  
                  <Stack direction="row" spacing={1}>
                    <Button
                      component={Link}
                      href={`/message/${developer.id}`}
                      variant="solid"
                      color="primary"
                      startDecorator={<MessageCircle size={16} />}
                      size="lg"
                    >
                      Contact Me
                    </Button>
                    <IconButton
                      variant="soft"
                      color={liked ? 'danger' : 'neutral'}
                      onClick={toggleLike}
                      size="lg"
                    >
                      <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
                    </IconButton>
                    <IconButton
                      variant="soft"
                      color="neutral"
                      size="lg"
                    >
                      <Share2 size={18} />
                    </IconButton>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Box>

        {/* Content Tabs */}
        <Tabs
          value={activeTab}
          onChange={(_, value) => setActiveTab(value as number)}
          sx={{ mb: 4 }}
        >
          <TabList
            variant="plain"
            sx={{
              p: 0,
              gap: 2,
              mb: 2,
              '--Tab-indicatorThickness': '3px',
              '--Tab-indicatorColor': 'var(--joy-palette-primary-500)',
            }}
          >
            <Tab>About</Tab>
            <Tab>Projects</Tab>
            <Tab>Experience</Tab>
            <Tab>Skills</Tab>
          </TabList>

          <TabPanel value={0}>
            <Card variant="outlined">
              <Typography level="title-lg" sx={{ mb: 2 }}>
                About Me
              </Typography>
              <Typography level="body-md" sx={{ mb: 4, whiteSpace: 'pre-line' }}>
                {developer.bio}
              </Typography>
              
              <Grid container spacing={4}>
                <Grid xs={12} md={6}>
                  <Typography level="title-md" sx={{ mb: 2 }}>
                    Languages
                  </Typography>
                  <Stack spacing={1} sx={{ mb: 4 }}>
                    {developer.languages.map((language, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <BookOpen size={16} />
                        <Typography level="body-md">{language}</Typography>
                      </Box>
                    ))}
                  </Stack>
                
                  <Typography level="title-md" sx={{ mb: 2 }}>
                    Education
                  </Typography>
                  <Stack spacing={2} sx={{ mb: 4 }}>
                    {developer.education.map((edu, index) => (
                      <Box key={index}>
                        <Typography level="title-sm">{edu.degree}</Typography>
                        <Typography level="body-sm">{edu.institution} • {edu.year}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Grid>
                
                <Grid xs={12} md={6}>
                  <Typography level="title-md" sx={{ mb: 2 }}>
                    Contact Information
                  </Typography>
                  <Stack spacing={1} sx={{ mb: 4 }}>
                    <Button
                      component="a"
                      href={`mailto:${developer.name.toLowerCase().replace(' ', '.')}@example.com`}
                      variant="plain"
                      color="neutral"
                      startDecorator={<Mail size={16} />}
                      sx={{ justifyContent: 'flex-start' }}
                    >
                      {developer.name.toLowerCase().replace(' ', '.')}@example.com
                    </Button>
                    <Button
                      component="a"
                      href={developer.social.portfolio}
                      target="_blank"
                      variant="plain"
                      color="neutral"
                      startDecorator={<ExternalLink size={16} />}
                      sx={{ justifyContent: 'flex-start' }}
                    >
                      {developer.social.portfolio}
                    </Button>
                  </Stack>
                  
                  <Button
                    variant="soft"
                    color="primary"
                    startDecorator={<Download size={16} />}
                    sx={{ mb: 2 }}
                  >
                    Download Resume
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </TabPanel>

          <TabPanel value={1}>
            <Card variant="outlined">
              <Typography level="title-lg" sx={{ mb: 3 }}>
                Projects
              </Typography>
              <Grid container spacing={3}>
                {developer.projects.map((project, index) => (
                  <Grid key={index} xs={12} md={4}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card
                        variant="outlined"
                        sx={{
                          height: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: 'md',
                            transform: 'translateY(-5px)',
                          },
                        }}
                      >
                        <AspectRatio ratio="16/9" sx={{ mb: 2 }}>
                          <img
                            src={project.image}
                            alt={project.title}
                            style={{ objectFit: 'cover' }}
                          />
                        </AspectRatio>
                        <Typography level="title-md" sx={{ mb: 1 }}>
                          {project.title}
                        </Typography>
                        <Typography level="body-sm" sx={{ mb: 2, color: 'text.secondary' }}>
                          {project.description}
                        </Typography>
                        <Stack
                          direction="row"
                          spacing={1}
                          useFlexGap
                          sx={{ flexWrap: 'wrap', gap: 0.5, mb: 2 }}
                        >
                          {project.technologies.map((tech) => (
                            <Chip key={tech} size="sm" variant="soft">
                              {tech}
                            </Chip>
                          ))}
                        </Stack>
                        <Button
                          component="a"
                          href={project.link}
                          variant="solid"
                          color="primary"
                          endDecorator={<ExternalLink size={14} />}
                          sx={{ mt: 'auto' }}
                        >
                          View Project
                        </Button>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </TabPanel>

          <TabPanel value={2}>
            <Card variant="outlined">
              <Typography level="title-lg" sx={{ mb: 3 }}>
                Work Experience
              </Typography>
              <Stack spacing={3} divider={<Divider />}>
                {developer.workExperience.map((work, index) => (
                  <Box key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: { xs: 'column', sm: 'row' },
                        mb: 1,
                      }}
                    >
                      <Typography level="title-md">{work.title}</Typography>
                      <Typography level="body-sm" sx={{ color: 'text.tertiary' }}>
                        {work.duration}
                      </Typography>
                    </Box>
                    <Typography level="title-sm" sx={{ mb: 1, color: 'text.secondary' }}>
                      {work.company}
                    </Typography>
                    <Typography level="body-md">{work.description}</Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </TabPanel>

          <TabPanel value={3}>
            <Card variant="outlined">
              <Typography level="title-lg" sx={{ mb: 3 }}>
                Skills & Technologies
              </Typography>
              <Grid container spacing={4}>
                <Grid xs={12} md={4}>
                  <Typography
                    level="title-md"
                    startDecorator={<Code size={18} />}
                    sx={{ mb: 2 }}
                  >
                    Frontend
                  </Typography>
                  <Stack spacing={2} sx={{ mb: 4 }}>
                    {developer.skills
                      .filter(skill => ['React', 'TypeScript', 'Next.js', 'Redux'].includes(skill))
                      .map((skill) => (
                        <Box
                          key={skill}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography level="body-md">{skill}</Typography>
                          <Box
                            sx={{
                              display: 'flex',
                            }}
                          >
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Box
                                  key={i}
                                  component="span"
                                  sx={{
                                    display: 'inline-block',
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    ml: 0.5,
                                    bgcolor:
                                      skill === 'React' || skill === 'TypeScript'
                                        ? i < 5
                                          ? 'primary.400'
                                          : 'neutral.200'
                                        : i < 4
                                        ? 'primary.400'
                                        : 'neutral.200',
                                  }}
                                />
                              ))}
                          </Box>
                        </Box>
                      ))}
                  </Stack>
                </Grid>
                
                <Grid xs={12} md={4}>
                  <Typography
                    level="title-md"
                    startDecorator={<HardDrive size={18} />}
                    sx={{ mb: 2 }}
                  >
                    Backend
                  </Typography>
                  <Stack spacing={2} sx={{ mb: 4 }}>
                    {developer.skills
                      .filter(skill => ['Node.js', 'Express.js', 'MongoDB', 'GraphQL'].includes(skill))
                      .map((skill) => (
                        <Box
                          key={skill}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography level="body-md">{skill}</Typography>
                          <Box
                            sx={{
                              display: 'flex',
                            }}
                          >
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Box
                                  key={i}
                                  component="span"
                                  sx={{
                                    display: 'inline-block',
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    ml: 0.5,
                                    bgcolor:
                                      skill === 'Node.js' || skill === 'MongoDB'
                                        ? i < 5
                                          ? 'primary.400'
                                          : 'neutral.200'
                                        : i < 4
                                        ? 'primary.400'
                                        : 'neutral.200',
                                  }}
                                />
                              ))}
                          </Box>
                        </Box>
                      ))}
                  </Stack>
                </Grid>
                
                <Grid xs={12} md={4}>
                  <Typography
                    level="title-md"
                    startDecorator={<Monitor size={18} />}
                    sx={{ mb: 2 }}
                  >
                    Other Technologies
                  </Typography>
                  <Stack spacing={2} sx={{ mb: 4 }}>
                    {developer.skills
                      .filter(skill => ['AWS', 'Jest', 'Git'].includes(skill))
                      .map((skill) => (
                        <Box
                          key={skill}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography level="body-md">{skill}</Typography>
                          <Box
                            sx={{
                              display: 'flex',
                            }}
                          >
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Box
                                  key={i}
                                  component="span"
                                  sx={{
                                    display: 'inline-block',
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    ml: 0.5,
                                    bgcolor:
                                      skill === 'AWS'
                                        ? i < 4
                                          ? 'primary.400'
                                          : 'neutral.200'
                                        : i < 3
                                        ? 'primary.400'
                                        : 'neutral.200',
                                  }}
                                />
                              ))}
                          </Box>
                        </Box>
                      ))}
                  </Stack>
                </Grid>
              </Grid>
              
              <Typography level="title-md" sx={{ mb: 2, mt: 2 }}>
                All Technologies
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                }}
              >
                {developer.skills.map((skill) => (
                  <Chip
                    key={skill}
                    variant="soft"
                    size="md"
                  >
                    {skill}
                  </Chip>
                ))}
              </Box>
            </Card>
          </TabPanel>
        </Tabs>
      </Container>
    </Box>
  );
}