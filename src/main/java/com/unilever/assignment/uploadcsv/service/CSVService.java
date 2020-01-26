package com.unilever.assignment.uploadcsv.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unilever.assignment.uploadcsv.Entity.CSVEntity;

@Service
public class CSVService {

	@Autowired
	private CSVRepository csvRepo;
	
	
	public CSVEntity save(CSVEntity csv) {
		return csvRepo.save(csv);
	}
	
	public List<CSVEntity> getAllSave(){
		return csvRepo.findAll();
	}
}
