import ImagesGrid from "./components/ImagesGrid";
import Year from "./components/Year";

export default function App() {
  return (
    <div class="container mx-auto px-4 max-w-screen-xl">
      <header class="my-8">
        <h1 class="text-4xl font-bold text-center">imgrid</h1>
      </header>
      <main>
        <ImagesGrid count={60} />
      </main>
      <footer class="my-8">
        <p class="text-center text-gray-500">
          &copy; <Year /> imgrid. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
