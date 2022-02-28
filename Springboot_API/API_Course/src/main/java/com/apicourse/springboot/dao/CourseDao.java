package com.apicourse.springboot.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apicourse.springboot.entities.Course;

//first is entity course 
//second is primary key nu field long
public interface CourseDao extends JpaRepository<Course, Long> {

}
