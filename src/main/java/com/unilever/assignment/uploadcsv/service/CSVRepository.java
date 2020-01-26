package com.unilever.assignment.uploadcsv.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unilever.assignment.uploadcsv.Entity.CSVEntity;

public interface CSVRepository extends JpaRepository<CSVEntity, Integer> {

}
