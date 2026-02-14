import type { Metadata } from 'next';
import WaveDivider from '@/components/WaveDivider';

export const metadata: Metadata = {
  title: 'Disclaimer | Sophos Technology Consultancy LLC',
};

const containerStyle = {
  maxWidth: '1080px',
  width: '80%' as const,
  margin: '0 auto',
};

const h3Style = {
  fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
  fontSize: '22px',
  fontWeight: 700,
  color: '#121212',
  marginTop: '30px',
  marginBottom: '15px',
};

const pStyle = {
  fontSize: '16px',
  fontWeight: 400 as const,
  lineHeight: '28.8px',
  color: '#666666',
  marginBottom: '15px',
};

export default function DisclaimerPage() {
  return (
    <>
      <section
        style={{
          background: 'linear-gradient(1deg, rgb(142, 235, 226) 0%, rgb(37, 232, 157) 100%)',
          padding: '43px 0 58px 0',
          position: 'relative',
        }}
      >
        <div className="r-container" style={{ ...containerStyle, textAlign: 'center' as const }}>
          <h2
            style={{
              fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
              fontSize: '45px',
              fontWeight: 700,
              color: '#121212',
              textTransform: 'uppercase' as const,
              letterSpacing: '1px',
            }}
          >
            Disclaimer
          </h2>
        </div>
        <WaveDivider position="bottom" shape="zigzag" fill="#ffffff" height={35} />
      </section>

      <section style={{ padding: '54px 0' }}>
        <div className="r-container" style={containerStyle}>
          <h3 style={h3Style}>Interpretation and Definitions</h3>
          <p style={pStyle}>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>
          <p style={pStyle}><strong>For the purposes of this Disclaimer:</strong></p>
          <ul style={{ ...pStyle, paddingLeft: '20px' }}>
            <li><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Disclaimer) refers to sophostc.com.</li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li><strong>You</strong> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            <li><strong>Website</strong> refers to sophostc.com, accessible from https://sophostc.com</li>
          </ul>

          <h3 style={h3Style}>Disclaimer</h3>
          <p style={pStyle}>
            The information contained on the Service is for general information purposes only. The Company assumes no responsibility for errors or omissions in the contents of the Service.
          </p>
          <p style={pStyle}>
            In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
          </p>
          <p style={pStyle}>
            The Company does not warrant that the Service is free of viruses or other harmful components.
          </p>

          <h3 style={h3Style}>External Links Disclaimer</h3>
          <p style={pStyle}>
            The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company. Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>

          <h3 style={h3Style}>Errors and Omissions Disclaimer</h3>
          <p style={pStyle}>
            The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.
          </p>
          <p style={pStyle}>
            The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.
          </p>

          <h3 style={h3Style}>Fair Use Disclaimer</h3>
          <p style={pStyle}>
            The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
          </p>
          <p style={pStyle}>
            The Company believes this constitutes a &quot;fair use&quot; of any such copyrighted material as provided for in section 107 of the United States Copyright law. If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
          </p>

          <h3 style={h3Style}>Views Expressed Disclaimer</h3>
          <p style={pStyle}>
            The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.
          </p>
          <p style={pStyle}>
            Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.
          </p>

          <h3 style={h3Style}>No Responsibility Disclaimer</h3>
          <p style={pStyle}>
            The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.
          </p>
          <p style={pStyle}>
            In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.
          </p>

          <h3 style={h3Style}>&quot;Use at Your Own Risk&quot; Disclaimer</h3>
          <p style={pStyle}>
            All information in the Service is provided &quot;as is&quot;, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.
          </p>
          <p style={pStyle}>
            The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.
          </p>

          <h3 style={h3Style}>Contact Us</h3>
          <p style={pStyle}>If you have any questions about this Disclaimer, You can contact Us:</p>
          <ul style={{ ...pStyle, paddingLeft: '20px' }}>
            <li>By email: info@sophostc.com</li>
            <li>By visiting our <a href="/contact" style={{ color: '#2ea3f2' }}>contact page</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
