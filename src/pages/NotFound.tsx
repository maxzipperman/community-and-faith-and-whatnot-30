import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 Not Found | Mission Digital</title>
        <meta name="description" content="The page you’re looking for doesn’t exist. Go back to the homepage." />
        <link rel="canonical" href={`${window.location.origin}/404`} />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
          <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
          <Link to="/" className="text-primary underline hover:no-underline">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
