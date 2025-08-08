
import React from 'react';

function CourseDetails(props) {
  return (
    <div>
      {props.courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
          {course.available ? <p>Available</p> : <p>Not Available</p>}
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
