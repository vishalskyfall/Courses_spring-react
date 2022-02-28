package com.apicourse.springboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apicourse.springboot.dao.CourseDao;
import com.apicourse.springboot.entities.Course;

import java.util.List;

@Service // this is service impl
public class CourseServiceImpl implements CourseService {
	@Autowired
	private CourseDao courseDao;

	@Override
	public List<Course> getCourses() {
		return courseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {

		return courseDao.getOne(courseId);
	}

	@Override
	public Course addCourse(Course course) {

		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		Course entityCourse = courseDao.getOne(parseLong);
		courseDao.delete(entityCourse);
	}

}
