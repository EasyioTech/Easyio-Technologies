import Image from "next/image";

export default function HeroDashboard() {
  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2rem]">
      <Image
        src="/images/hero_dashboard_v3.png"
        alt="Easyio Enterprise Dashboard"
        fill
        className="object-cover"
        priority
      />
      {/* Premium Glass Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/[0.02] pointer-events-none" />
    </div>
  );
}
