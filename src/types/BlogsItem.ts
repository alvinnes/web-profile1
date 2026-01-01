export interface BlogsItem {
  category: string;
  create_at: string;
  title: string;
  description: string;
  img: string;
  delay: number;
  id: number;
}

const blogsItem: BlogsItem[] = [
  {
    id: 1,
    title: "Virtual PC Assembly Guide Using Cisco IT Essentials",
    category: "Tutorials",
    description:
      "Complete computer assembly steps from power supply installation to external device connection in Cisco IT Essentials simulation.",
    create_at: "24-11-2025",
    img: "/img/img-blogs/pc-virtual.png",
    delay: 0.1,
  },
  {
    id: 2,
    title: "How to Install and Configure ProFTPD on Debian 12 Bookworm Linux",
    category: "Servers",
    description:
      "Complete step-by-step guide to setting up FTP server on Debian 12 Bookworm with ProFTPD, including configuration, permissions, and FileZilla integration.",
    create_at: "24-11-2025",
    img: "/img/img-blogs/proftpd.png",
    delay: 0.2,
  },
  {
    id: 3,
    title:
      "How to Install and Configure Apache Web Server on Debian 12 Bookworm Linux",
    category: "Servers",
    description:
      "Step-by-step guide to installing Apache2, deploying custom web pages, and configuring ports on Debian 12 Bookworm Linux for beginners.",
    create_at: "24-11-2025",
    img: "/img/img-blogs/web-server.png",
    delay: 0.3,
  },
  {
    id: 4,
    title:
      "How to Install and Configure SSH Remote Server on Debian 12 Bookworm Linux",
    category: "Servers",
    description:
      "Complete guide to installing OpenSSH server, enabling remote access, and customizing SSH port and root login on Debian 12 Bookworm Linux.",
    create_at: "24-11-2025",
    img: "/img/img-blogs/ssh.png",
    delay: 0.1,
  },
  {
    id: 5,
    title:
      "How to Configure Network Settings and Repository on Debian 12 (Bookworm) in VirtualBox",
    category: "Servers",
    description:
      "Complete guide to setting up bridged adapter, configuring static/DHCP network, adding repository sources, and updating Debian 12 Bookworm VM.",
    create_at: "24-11-2025",
    img: "/img/img-blogs/network.png",
    delay: 0.2,
  },
  {
    id: 6,
    title: "How to Install and Configure Proxmox VE on Physical Server",
    category: "Tutorials",
    description:
      "Complete step-by-step guide to installing Proxmox VE from bootable USB, configuring BIOS virtualization settings, network setup, and accessing the web interface.",
    create_at: "24-11-2025",
    img: "/img/img-blogs/proxmox.png",
    delay: 0.3,
  },
];

export default blogsItem;
