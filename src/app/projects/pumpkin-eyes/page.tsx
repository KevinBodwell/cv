import Link from 'next/link';
export const dynamic = 'force-static';

export default function PumpkinEyesPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Follow Me Pumpkin</h1>
      <p className="text-gray-300 text-lg mb-6">
        This project is a work in progress, progress is slow as other projects have gotten in the way.  
      </p>
      <div className="relative w-full pb-[56.25%] mb-6">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/J02LZxw7xJ8"
          title="Demo 1 Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
      </div>
      <p>So far I have a demo set of 3d printed eyes and controlling the motion via an old game port joystick</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-400 py-5">
        <li>Arduino Motion Control</li>
        <li>Raspberry Pi for camera and object tracking</li>
        <li>ROS2 for robotics</li>
        <li>Based on a project by Will Cogley: <Link href="https://willcogley.notion.site/EyeMech-1-0-fee129fa32a443749f88524f53702f5a" className="hover:underline">EyeMech 1.0</Link></li>
      </ul>

      <p className="mt-6 text-sm text-gray-300">Tech stack: Arduino, Raspberry Pi, ROS</p>
    </main>
  );
}
