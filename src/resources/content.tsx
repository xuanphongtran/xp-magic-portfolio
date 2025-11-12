import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from '@/types'
import { Line, Logo, Row, Text } from '@once-ui-system/core'

const person: Person = {
  firstName: 'Xuan Phong',
  lastName: 'Tran',
  name: 'Xuan Phong Tran',
  role: 'Frontend Developer',
  avatar: '/images/avatar.jpg',
  email: 'phongbvb.09@gmail.com',
  location: 'Asia/Ho_Chi_Minh', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English', 'Vietnamese'], // optional: Leave the array empty if you don't want to display languages
}

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
}

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'http://github.com/xuanphongtran',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/xuanphongtran/',
  },
  {
    name: 'Threads',
    icon: 'threads',
    link: 'https://www.threads.com/@xuanphong.exe',
  },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
  },
]

const home: Home = {
  path: '/',
  image: '/images/og/home.png',
  label: 'Home',
  title: `${person.firstName}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>Building modern, high-performance web applications with clean code and seamless UX.</>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{' '}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: '/work/building-once-ui-a-customizable-design-system',
  },
  subline: (
    <>
      I'm Xuan Phong, a frontend developer at
      <Logo
        dark
        icon="/trademarks/bincg-logo.svg"
        style={{ display: 'inline-flex', top: '0.25em', marginLeft: '0.25em' }}
      />
      , where I build intuitive user experiences. After hours, I build my own projects.
    </>
  ),
}

const about: About = {
  path: '/about',
  label: 'About',
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Xuan Phong is a Ho Chi Minh City-based frontend developer with 2 years of experience in
        building modern web applications. With a strong foundation in React, Next.js, and modern
        JavaScript, he specializes in creating responsive, user-friendly interfaces and seamless
        user experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'BIN Corporation Group',
        timeframe: '2024 - Present',
        role: 'Frontend Developer',
        achievements: [
          <>
            Developed and maintained the frontend of the BIN Corporation Group website, ensuring
            seamless user experiences and performance.
          </>,
        ],
        // images: [
        //   // optional: leave the array empty if you don't want to display images
        //   {
        //     src: '/images/projects/project-01/cover-01.jpg',
        //     alt: 'Once UI Project',
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        company: 'FPT Software',
        timeframe: '2022 - 2023',
        role: 'Frontend Developer',
        achievements: [
          <>
            Developed and maintained the frontend of the FPT Software project, ensuring seamless
            user experiences and performance.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'University of Economics Ho Chi Minh City',
        description: <>Studied software engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Next.js',
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        tags: [
          {
            name: 'JavaScript',
            icon: 'javascript',
          },
          {
            name: 'Next.js',
            icon: 'nextjs',
          },
          {
            name: 'Supabase',
            icon: 'supabase',
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
}

const blog: Blog = {
  path: '/blog',
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
}

const work: Work = {
  path: '/work',
  label: 'Work',
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
}

const gallery: Gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: '/images/gallery/horizontal-1.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/vertical-4.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/horizontal-3.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/vertical-1.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-2.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/horizontal-2.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-4.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/vertical-3.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
  ],
}

export { person, social, newsletter, home, about, blog, work, gallery }
