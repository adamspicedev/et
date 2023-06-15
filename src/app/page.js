export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen gap-10 p-24">
      <div>
        Elliot
        <audio src="./assets/elliot.mp3" controls />
      </div>
      <div>
        Phone
        <audio src="./assets/phone.mp3" controls />
      </div>
    </main>
  );
}
