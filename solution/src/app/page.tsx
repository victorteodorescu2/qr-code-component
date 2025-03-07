import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[499px] w-[320px] flex-col gap-[24px] rounded-[20px] bg-white pt-[16px] pr-[16px] pb-[40px] pl-[16px]">
      <Image src="/qr-code.png" alt="QR Code" width={288} height={288} />
      <section className="flex flex-col gap-[16px] pr-[16px] pl-[16px]">
        <article>
          <p className="text-preset-1 text-slate-900 text-center">
            Improve your front-end skills by building projects
          </p>
        </article>
        <article>
          <p className="text-preset-2 text-slate-500 text-center">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </article>
      </section>
    </main>
  );
}
