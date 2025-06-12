import React from 'react';
import Breadcrump from '../../components/breadcrumb/breadcrumb'
import { useLocation } from 'react-router-dom';
import './legals.scss'

const AboutUs = (props) => {
    const location = useLocation();
    const currentCategory = location.pathname.split("/").pop().replaceAll('-',' ');
    return (
        <>
            <div className='aboutus-section'>
                <Breadcrump currentPath={currentCategory} />
                <div className="aboutus-content">
                    <h1 className="mainHeading">About Us</h1>
                    <p className="subHeading">Our Mission</p>
                    <p className="paragraph">
                        At Contoso Traders, our mission is to make technology accessible, affordable, and enjoyable for everyone. We are passionate about delivering the latest and greatest in electronics, from smartphones and laptops to gaming accessories and more.
                    </p>
                    <div className="aboutus-values">
                        <h2 className="values-heading">Our Values</h2>
                        <ul>
                            <li><strong>Quality:</strong> We offer only the best products from trusted brands.</li>
                            <li><strong>Customer Focus:</strong> Our support team is dedicated to your satisfaction.</li>
                            <li><strong>Innovation:</strong> We stay ahead with the latest trends and technology.</li>
                            <li><strong>Integrity:</strong> We believe in honest pricing and transparent service.</li>
                        </ul>
                    </div>
                    <div className="aboutus-team">
                        <h2 className="team-heading">Meet Our Team</h2>
                        <div className="team-members">
                            <div className="team-member">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe" className="team-photo"/>
                                <div className="team-info">
                                    <div className="team-name">John Doe</div>
                                    <div className="team-role">Founder & CEO</div>
                                </div>
                            </div>
                            <div className="team-member">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Smith" className="team-photo"/>
                                <div className="team-info">
                                    <div className="team-name">Jane Smith</div>
                                    <div className="team-role">Head of Customer Success</div>
                                </div>
                            </div>
                            <div className="team-member">
                                <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Alex Lee" className="team-photo"/>
                                <div className="team-info">
                                    <div className="team-name">Alex Lee</div>
                                    <div className="team-role">Lead Developer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aboutus-contact">
                        <h2>Contact Us</h2>
                        <p>
                            Have questions or feedback? Reach out to our team at <a href="mailto:support@contosotraders.com">support@contosotraders.com</a>.
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
        </>
     );
}

export default AboutUs;