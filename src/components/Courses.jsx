
import React from 'react'
import CourseItem from './classes/CourseItem'
function Courses() {
  return (
    <div>
      <h1>Courses page coming soon...</h1>
      {/* create a class for course display the objects here 
      with name , image , no.of students enrolled ,and a details button
      
      */}
      <div className="container my-3">
        <h2>Available Courses</h2>
        <div className="row">
          <div className="col-md-4">
            <CourseItem title="Course 1" imageUrl="https://digiskills.pk/images/courses/SEO101_Image.png" strength="1000" />
          </div>
          <div className="col-md-4">
            <CourseItem title="Course 2" imageUrl="https://digiskills.pk/images/courses/SEO101_Image.png" strength="2000" />
          </div>
          <div className="col-md-4">
            <CourseItem title="Course 3" imageUrl="https://digiskills.pk/images/courses/SEO101_Image.png" strength="3000" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <CourseItem title="Course 4" imageUrl="https://digiskills.pk/images/courses/SEO101_Image.png" strength="4000" />
          </div>
          <div className="col-md-4">
            <CourseItem title="Course 5" imageUrl="https://digiskills.pk/images/courses/SEO101_Image.png" strength="5000" />
          </div>
          <div className="col-md-4">
            <CourseItem title="Course 6" imageUrl="https://digiskills.pk/images/courses/SEO101_Image.png" strength="6000" />
          </div>
        </div>
      </div>
      </div>
      )
}

      export default Courses
