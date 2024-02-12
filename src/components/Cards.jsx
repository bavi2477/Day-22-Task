import React from 'react';
import '../components/Cards.css'

const Cards = ({ arrObj }) => {
    const renderIcon = (value, plan) => {
        if (plan === "FREE") {
            if (value === 'Unlimited Private Projects' || value === 'Dedicated Phone Support' || value === 'Free Subdomain' || value === 'Monthly Status Reports') {
                return (
                    <span className="disabled" style={{ color: 'gray' }}>
                        <i className="bi bi-x"></i> {value} 
                    </span>
                );
            } else {
                return (
                    <span>
                        <i className="bi bi-check"></i> {value}
                    </span>
                );
            }
        } else if (plan === "PLUS") {
            if (value === 'Monthly Status Reports') {
                return (
                    <span className="disabled" style={{ color: 'gray' }}>
                        <i className="bi bi-x"></i> {value} 
                    </span>
                );
            } else {
                return (
                    <span>
                        <i className="bi bi-check"></i> {value}
                    </span>
                );
            }
        } else if (plan === "PRO") {
            return (
                <span>
                    <i className="bi bi-check"></i> {value}
                </span>
            );
        }
    };

    return (

        <>
        
        <div className="container-fluid bg-primary p-5 d-flex flex-column">
            <div className="row justify-content-center flex-grow-1">
                {arrObj.map((item, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card bg-light rounded-3 h-100"> 
                            <div className="card-body d-flex flex-column justify-content-center">
                                <h6 className="card-title text-center ">{item.title}</h6>
                                <h3 className="card-title text-center ">{item.amount}</h3> <hr /> 
                                <p className="card-text">
                                    <span className="highlight" onClick={() => {}}>
                                        {renderIcon(item.numberOfUsers, item.title)}<br />
                                        {renderIcon(item.storage, item.title)}<br />
                                        {renderIcon(item.publicProjects, item.title)}<br />
                                        {renderIcon(item.access, item.title)}<br />
                                        {renderIcon(item.privateProjects, item.title)}<br />
                                        {renderIcon(item.phoneSupport, item.title)}<br />
                                        {renderIcon(item.subDomain, item.title)}<br />
                                        {renderIcon(item.statusReports, item.title)}
                                    </span>
                                </p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary w-100">Subscription</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );

};

export default Cards;
