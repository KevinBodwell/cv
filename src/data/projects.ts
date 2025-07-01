export type Project = {
  title: string;
  company: string;
  date: string;
  description: string;
  tags: string[];
  href: string;
  homepage?: boolean;
};

const allProjects: Project[] = [
    {
    title: 'Shopify Site Migration',
    company: 'Ripple Junction',
    date: 'April 2025 - May 2025',
    description: 'Migrated Direct to Consumer (DTC) site from Magento 2 to Shopify, improving performance and reducing costs in under 30 days.',
    tags: ['Shopify', 'Migration', 'Performance'],
    href: '/projects/shopify-site-migration',
  },
  {
    title: 'Magento 2 Site Rescue',
    company: 'Ripple Junction',
    date: 'March 2023 - July 2023',
    description: 'Rescue a Magento 2 site from a 3rd party agency relationship gone south.  Migrated to Adobe Commerce Cloud, improved performance, and ensured zero unplanned downtime.',
    tags: ['Magento 2', 'Performance', 'New Relic'],
    href: '/projects/magento-site-rescue',
  },
  {
    title: 'Pumpkin Eyes',
    company: 'Personal Project',
    date: 'September 2024 - Present',
    description: 'Building a pumpkin with animatronic eyes that follow you around the room.  The project is a fun exploration of hardware and software integration.',
    tags: ['Animatronics', 'Hardware', 'Software', 'Raspberry Pi', 'Ardiono', 'OpenCV', 'Computer Vision', 'Object recognition'],
    href: '/projects/pumpkin-eyes',
    homepage: true,
  },
  {
    title: 'South Napa Earthquake Recovery',
    company: 'Western Dovetail',
    date: 'August 2014',
    description: '',
    tags: ['Hardware', 'woodworking', 'Disaster Recovery', 'Electrical', 'Plumbing', 'Rigging', 'Construction', 'Engineering', 'Project Management', 'Safety', 'Logistics', 'Team Leadership'],
    href: '/projects/south-napa-earthquake-recovery',
    homepage: true,
  },

  {
    title: 'Magic Box',
    company: 'Western Dovetail',
    date: 'July 2009',
    description: 'The magic box is a spectacle of wooden boxes that rise from within themselves to show all the different joinery we could do.  The project was a collaboration with the owner of Western Dovetail.',
    tags: ['Hardware', 'woodworking', 'Dovetail Joinery', 'Zip Chain Actuator', 'Relay Logic Control'],
    href: '/projects/wd-magic-box',
    homepage: true,
  },
  {
    title: 'Milling Logs',
    company: 'Personal Project',
    date: 'January 2015',
    description: 'My brother and I milling an Ash log into lumber.  We both grew up with the woodworking gene, our father was a shop teacher for many years and even built the house we grew up in.  We continue the family tradtion of getting outside and making things ourselves.',
    tags: ['Woodworking', 'Milling', 'Lumber', 'Ash'],
    href: '/projects/charlie-sawmill',
    homepage: true,
  } 
];

export default allProjects;