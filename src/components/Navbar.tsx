import React, { useEffect, useState } from "react";
import DateInput from "./DateInput";

interface NavbarProps {
  onDateChange: (date: string) => void;
  scrollToPhoto: () => void;
}

interface MenuLink {
  name: string;
  link: string;
  action?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDateChange, scrollToPhoto }) => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const menuLinks: MenuLink[] = [
    { name: "HOME", link: "#home" },
    { name: "APOD", link: "#apod" },
    { name: "GALLERY", link: "#gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll<HTMLElement>("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + section.offsetHeight
        ) {
          setActiveLink(`#${sectionId}`);
        }
      });

      if (scrollPosition > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      if (scrollPosition === 0) {
        setActiveLink("#home");
      }

      if (scrollPosition + window.innerHeight === document.body.offsetHeight) {
        setActiveLink("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    setOpen(false);
  };

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-[#020106] text-white" : "text-white bg-[#020106]"
      }`}
    >
      <div className="flex items-center justify-between border-b-[1px] border-white">
        <div className="mx-5">
          <img src="/logo-nasa.png" alt="" className="md:h-20 w-20" />
        </div>
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white" : "bg-[#020106]"
          } text-white md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                key={i}
                className={`px-6 list-text font-bold ${
                  activeLink === menu.link ? "active" : ""
                }`}
              >
                <a
                  href={menu.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSetActiveLink(menu.link);
                    if (menu.action) menu.action();
                  }}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:pr-[40px]">
          <DateInput
            onDateChange={onDateChange}
            scrollToPhoto={scrollToPhoto}
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-900" : "text-white"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon
            name="menu"
            className={sticky ? "sticky-menu-icon" : ""}
          ></ion-icon>
        </div>
      </div>
      <div
        className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
          open ? "right-0" : "right-[-100%]"
        }`}
      >
        <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
          {menuLinks?.map((menu, i) => (
            <li
              onClick={() => {
                setOpen(false);
                handleSetActiveLink(menu.link);
                if (menu.action) menu.action();
              }}
              key={i}
              className={`px-6 list-text font-bold ${
                activeLink === menu.link ? "active" : ""
              }`}
            >
              <a href={menu.link}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
