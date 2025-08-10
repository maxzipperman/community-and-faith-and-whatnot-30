import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Events = () => {
  const events = [
    { title: 'Community Food Drive', date: 'Sat, Sep 14', time: '10:00 AM', location: 'Main Hall' },
    { title: 'Volunteer Orientation', date: 'Wed, Sep 18', time: '6:30 PM', location: 'Room B' },
    { title: 'Harvest Festival', date: 'Sun, Oct 6', time: '12:00 PM', location: 'Courtyard' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Events | Position Digital</title>
        <meta name="description" content="See upcoming events and opportunities to get involved." />
        <link rel="canonical" href="/events" />
      </Helmet>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="mb-3">Upcoming Events</h1>
            <p className="text-muted-foreground">Join us and be part of the community.</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((e, i) => (
              <Card key={i} className="shadow-soft hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">{e.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-1">
                  <div>{e.date}</div>
                  <div>{e.time}</div>
                  <div>{e.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
