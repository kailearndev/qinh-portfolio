import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  const footers = [
    {
      id: 1,
      name: "Facebook",
      href: "https://www.facebook.com/yourprofile",
      icon: "/fb.jpg",
    },
    {
      id: 2,
      name: "TikTok",
      href: "https://www.tiktok.com/@yourprofile",
      icon: "/tiktok.jpg",
    },
    {
      id: 3,
      name: "Phone",
      href: "tel:+1234567890",
      icon: "/phone.jpg",
    },
    {
      id: 4,
      name: "Email",
      href: "mailto:youremail@example.com",
      icon: "/mail.png",
    },
  ];
  return (
    <footer className="flex flex-col ">
      <div className="flex flex-col gap-4 mb-20 ">
        {footers.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className=" flex gap-2 items-center"
          >
            <div className="relative w-6 h-6 ">
              <Image
                src={item.icon}
                alt={item.name}
                fill
                className="rounded-full hover:ring-2 ring-amber-500 duration-250"
              />
            </div>
            <div className=" text-xs text-white   ">{item.name}</div>
          </Link>
        ))}
      </div>
      <div className="text-center text-sm">
        &copy; {year} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
