import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import { ProjectDetails } from "@/components/sections/ProjectDetails";
import { personalData } from "@/data/personal";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `https://dakshchaudhary.com/projects/${slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
    alternates: {
      canonical: `/projects/${slug}`,
    }
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Calculate previous and next projects
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "WebApplication",
    author: {
      "@type": "Person",
      name: personalData.name,
    },
    image: `https://dakshchaudhary.com${project.image}`,
    url: `https://dakshchaudhary.com/projects/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen pt-24 pb-12 gap-6 max-w-[1320px] mx-auto px-4 md:px-6">
        <ProjectDetails project={project} prevProject={prevProject} nextProject={nextProject} />
      </div>
    </>
  );
}
