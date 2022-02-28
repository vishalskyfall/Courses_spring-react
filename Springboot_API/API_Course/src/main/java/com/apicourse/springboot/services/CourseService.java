package com.apicourse.springboot.services;

import com.apicourse.springboot.entities.Course;
import java.util.List;

public interface CourseService {

	public List<Course> getCourses();

	public Course getCourse(long courseId);

	public Course addCourse(Course courseId);

	public Course updateCourse(Course courseId);

	public void deleteCourse(long parseLong);
}
