import GridLayout from "@/layouts/GridLayout";
import CertificationsContent from "./CertificationsContent";

const Certifications = () => {
  return (
    <GridLayout
      id="certifications"
      title="Certifications"
      subjudul="These certificates reflect my dedication to continuous learning and
        skill development in web development and programming. They showcase
        the practical knowledge I have gained and my commitment to staying
        updated with industry trends. I am eager to apply these skills to
        real-world projects and challenges."
    >
      <CertificationsContent />
    </GridLayout>
  );
};

export default Certifications;
