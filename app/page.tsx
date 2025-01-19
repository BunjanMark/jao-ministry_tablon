export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-gray-100 py-16 px-6 rounded-lg shadow-md mb-16">
        <h1 className="text-4xl sm:text-5xl font-semibold text-center text-blue-800 mb-4">
          Welcome to JAO-Ministry
        </h1>
        <p className="text-lg sm:text-xl text-center text-gray-600 mb-8">
          A place of Prophetic Healing & Deliverance. Join us in our mission to
          spread faith and hope.
        </p>
        <a
          href="mailto:jaomtablon@gmail.com"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-500 transition duration-300"
        >
          Contact Us
        </a>
      </section>

      {/* About the Ministry */}
      <section className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-6">
          About Our Ministry
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            ullamcorper, metus ac vehicula lacinia, eros nisl dictum felis, sed
            malesuada magna risus eget eros. Sed at efficitur nunc, a hendrerit
            augue. Ut dapibus quam purus, ac tincidunt enim lacinia ut.
            Curabitur interdum malesuada nulla a lobortis.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            viverra, libero ac tincidunt luctus, nisl velit viverra elit, sit
            amet ullamcorper ligula mi a magna. Nam sit amet felis ac ipsum
            fringilla aliquam. Aliquam erat volutpat.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6 rounded-lg mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-6">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Prophetic Healing
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              metus vel magna euismod condimentum.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Deliverance Services
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              at felis hendrerit, convallis orci id, fringilla sem.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Spiritual Growth
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
              mauris in felis sollicitudin tincidunt.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
          Join Us in Our Mission
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          ullamcorper, metus ac vehicula lacinia, eros nisl dictum felis, sed
          malesuada magna risus eget eros.
        </p>
        <a
          href="mailto:jaomtablon@gmail.com"
          className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-500 transition duration-300"
        >
          Get Involved
        </a>
      </section>
    </main>
  );
}
