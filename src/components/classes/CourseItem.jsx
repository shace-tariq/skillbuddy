// the problem is in the class newsitem
import React, { Component } from 'react'

export class CourseItem extends Component {

  render() {
    
    let { title, imageUrl,strength } = this.props;
    return (
<>
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://digiskills.pk/images/courses/SEO101_Image.png":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">  {title} ...</h5>
            <p className="card-text">{strength}...</p>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default CourseItem
