import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Software development, payment gateway integration, and fintech consulting services.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Software Development for Financial Institutions',
      description:
        "Leverage our expertise to develop robust, scalable, and secure software solutions tailored to your financial institution's unique needs. From core banking systems to customer-facing applications, we deliver cutting-edge technology that streamlines operations, enhances efficiency, and improves customer satisfaction.",
      details: [
        'Core banking system development',
        'Customer-facing application design',
        'API development and integration',
        'Legacy system modernization',
        'Cloud-native architecture',
      ],
    },
    {
      title: 'Payment Gateway Integration & Optimization',
      description:
        'Seamlessly integrate payment gateways into your existing infrastructure or build custom payment solutions from scratch. Our team ensures smooth, secure, and reliable payment processing, while optimizing transaction flows and minimizing costs, enabling you to focus on growing your business.',
      details: [
        'PayPal, Stripe, Authorize.net integration',
        'Custom payment solution development',
        'Fraud detection implementation',
        'Transaction flow optimization',
        'PCI DSS compliance',
      ],
    },
    {
      title: 'Fintech Consulting and Innovation',
      description:
        'Stay at the forefront of the fintech revolution with our strategic consulting services. We provide in-depth market insights, identify emerging trends, and develop innovative strategies to help you seize new opportunities, disrupt traditional markets, and establish a competitive edge in the fintech space.',
      details: [
        'Digital transformation strategy',
        'Robo-advisory solutions',
        'Blockchain integration',
        'AI-powered portfolio management',
        'Market analysis and insights',
      ],
    },
  ];

  return (
    <>
      {/* Hero banner */}
      <section
        style={{
          background: 'linear-gradient(1deg, rgb(142, 235, 226) 0%, rgb(37, 232, 157) 100%)',
          padding: '38.4px 0 51.2px 0',
        }}
      >
        <div style={{maxWidth:"1080px",width:"80%",margin:"0 auto",textAlign:"center"}}>
          <h1
            style={{
              fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
              fontSize: '65px',
              fontWeight: 900,
              lineHeight: '71.5px',
              color: '#000000',
              letterSpacing: '1.3px',
            }}
          >
            Our Services
          </h1>
          <p  style={{ marginTop: '20px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Empowering finance through technology, innovation, and expertise.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={index}
          style={{
            backgroundColor: index % 2 === 0 ? '#ffffff' : '#f2f2f2',
            padding: '51.19px 0',
          }}
        >
          <div style={{maxWidth:"1080px",width:"80%",margin:"0 auto"}}>
            <h2 style={{ marginBottom: '20px' }}>{service.title}</h2>
            <p
              style={{
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '23.8px',
                color: '#666666',
                marginBottom: '25px',
              }}
            >
              {service.description}
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {service.details.map((detail) => (
                <li
                  key={detail}
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '2em',
                    color: '#666666',
                    paddingLeft: '20px',
                    position: 'relative',
                  }}
                >
                  <span style={{ position: 'absolute', left: 0, color: '#25e89d' }}>→</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{padding:"51.2px 0",backgroundColor:"#25e89d"}}>
        <div style={{maxWidth:"1080px",width:"80%",margin:"0 auto",textAlign:"center"}}>
          <h2 style={{ marginBottom: '20px' }}>Ready to get started?</h2>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '23.8px',
              color: '#121212',
              maxWidth: '600px',
              margin: '0 auto 30px',
            }}
          >
            Contact us today to discuss how we can help transform your business with our cutting-edge solutions.
          </p>
          <a href="/contact" style={{fontFamily:"var(--font-roboto),Roboto,sans-serif",fontSize:"16px",fontWeight:500,color:"#fff",backgroundColor:"#242424",padding:"15px 45px 15px 35px",borderRadius:"14px",border:"none",letterSpacing:"1px",display:"inline-block",textDecoration:"none"}}>
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
