interface ActivitiesItem {
  image: string;
  title: string;
  subtitle: string;
  borderColor: string;
  gradient: string;
  url: string;
}

const activitiesItem: ActivitiesItem[] = [
  {
    image: "/img/activity/iot-lampu.jpg",
    title: "Web-Based Smart Light Control System using React and ESP32",
    subtitle:
      "Built a web-based IoT system to control LED lights remotely using ESP32 microcontroller and React.js frontend. Developed responsive web interface using React.js and Tailwind CSS, while programming the ESP32 with Arduino IDE using C language. The system uses REST API for real-time communication between web and hardware. This hands-on project helped me understand hardware-software integration, WiFi connectivity on microcontrollers, and bridging web development with embedded systems.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "/img/activity/install-deb.jpg",
    title: "First Debian 12 Installation on Physical Hardware",
    subtitle:
      "My first experience installing Debian 12 (Bookworm) on physical hardware at school! Going through the complete installation process from scratch - from creating bootable media to configuring the system. This hands-on learning experience marks the beginning of my journey into Linux system administration and server infrastructure. Planning to use this setup as a foundation for hosting my fullstack projects and deepening my understanding of server deployment.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "/img/activity/lan-connector.jpg",
    title: "Learning Network Cable Crimping: Straight-Through & Cross Full",
    subtitle:
      "Learned how to properly crimp Ethernet/LAN cables with both straight-through and cross full configurations at school. Practiced terminating RJ45 connectors following T568A and T568B wiring standards, then verified cable continuity using a LAN cable tester. This hands-on experience helped me understand network cable standards, pin configurations, cable testing procedures, and the practical differences between straight-through and cross full cables for various networking scenarios",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "/img/activity/kabel-pw.jpg",
    title: "Hands-On: Understanding PSU Connectors and Voltage Standards",
    subtitle:
      "Learned about various PC power supply cable types and their proper connections to motherboard and components at school. Studied the voltage specifications of each connector including ATX 20/24-pin main power, ATX 4/8-pin CPU power, PCIe 6/8-pin GPU power, SATA power, Molex 4-pin, and Mini Molex connectors. This hands-on practice helped me understand power distribution in PC systems, voltage requirements for different components, and proper cable management for safe computer assembly.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "/img/activity/mit-app.jpg",
    title: "Building Educational Android App using MIT App Inventor",
    subtitle:
      "Developed an educational Android application about Earth and Space with interactive quiz feature using MIT App Inventor as a group project at school. Built the app from scratch including UI design, implemented multi-screen navigation (biodata, materials, quiz, references), created multiple-choice quiz with ABC options, integrated YouTube video links for learning materials, and added a references section. This project helped me understand mobile app development fundamentals, visual programming logic, user interaction handling, and creating educational content in mobile applications.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "/img/activity/rakit-pc.jpg",
    title: "Learning PC Assembly: Building Computer from Scratch",
    subtitle:
      "Gained hands-on experience in computer assembly from scratch at school. Learned to identify and understand the function of each PC component including motherboard, CPU, RAM, power supply, storage, and cooling system. Practiced the complete assembly process from installing PSU and motherboard to cable management, component installation, and successfully powering on the system. This practical experience deepened my understanding of computer hardware architecture, component compatibility, proper handling procedures, and troubleshooting techniques.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
];

export default activitiesItem;
