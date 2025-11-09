import Link from "next/link";
import { SiFacebook, SiMapillary, SiPhonepe, SiTiktok } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const footers = [
    {
      id: 1,
      name: "Facebook",
      href: "https://www.facebook.com/yourprofile",
      icon: SiFacebook,
    },
    {
      id: 2,
      name: "TikTok",
      href: "https://www.tiktok.com/@yourprofile",
      icon: SiTiktok,
    },
    {
      id: 3,
      name: "Phone",
      href: "tel:+1234567890",
      icon: SiPhonepe,
    },
    {
      id: 4,
      name: "Email",
      href: "mailto:youremail@example.com",
      icon: SiMapillary,
    },
  ];
  return (
    <footer className="flex flex-col ">
      <div className="flex flex-col gap-4 mb-20 ">
        {footers.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className=" flex gap-2 items-center hover:text-yellow-400 transition"
          >
            {<item.icon />}
            <div className=" text-xs text-white ">{item.name}</div>
          </Link>
        ))}
      </div>
      <div className="text-center text-sm">
        &copy; {year} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
