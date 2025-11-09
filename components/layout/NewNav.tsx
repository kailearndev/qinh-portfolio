import StaggeredMenu from "../StaggeredMenu";

export default function NewNav({
  onMenuOpen,
  onMenuClose,
}: {
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}) {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Services", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <div style={{ height: "100vh", background: "#1a1a1a" }}>
      <StaggeredMenu
        isFixed
        position="left"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        logoUrl="/logo.png"
        accentColor="#ff6b6b"
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
      />
    </div>
  );
}
