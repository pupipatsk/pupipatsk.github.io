# Directory Structure

The portfolio website is organized as follows:

\`\`\`
portfolio/
├── app/
│   ├── layout.tsx           # Root layout with font configuration
│   ├── globals.css          # Global styles
│   ├── page.tsx             # Landing page
│   ├── resume/
│   │   └── page.tsx         # Resume page
│   └── photography/
│       └── page.tsx         # Photography page
├── components/
│   ├── navbar.tsx           # Navigation component
│   ├── footer.tsx           # Footer component
│   ├── mode-toggle.tsx      # Dark/light mode toggle
│   ├── theme-provider.tsx   # Theme provider (from shadcn)
│   └── ui/                  # Shadcn UI components
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── [image assets]       # Image assets go here
└── tailwind.config.ts       # Tailwind configuration
\`\`\`

## Image Assets Organization

For image assets, create the following structure in the `public` directory:

\`\`\`
public/
├── profile/                 # Profile photos
│   └── profile-photo.jpg    # Main profile photo
├── photography/             # Photography portfolio images
│   ├── events/              # Event photography
│   ├── portrait/            # Portrait photography
│   └── landscape/           # Landscape photography
└── projects/                # Project screenshots or images
\`\`\`

## Content Integration

The content from the `main.md` file has been integrated into the website as follows:

1. **Personal Information**: Used in the landing page hero section and resume page header
2. **Education**: Displayed in both the landing page and detailed in the resume page
3. **Work Experience**: Detailed in the resume page
4. **Extracurricular Activities & Achievements**: Featured on the landing page and detailed in the resume page
5. **Certifications**: Listed in the resume page
6. **Technical Skills**: Displayed on both the landing page and resume page
7. **Photography Experience**: Integrated into the photography page

To update the content:

1. Edit the respective page files (`app/page.tsx`, `app/resume/page.tsx`, `app/photography/page.tsx`)
2. Replace placeholder images with actual photos by adding them to the appropriate directories in `public/`
3. Update links to external profiles (LinkedIn, GitHub, Instagram)
