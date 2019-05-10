package com.example.demo.web;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class ArithController {

	@RequestMapping(value = "/api/arith")
	public double doArith(@RequestParam double num1, @RequestParam double num2, @RequestParam String op) {
		switch (op) {
		case "add":
			return num1 + num2;
		case "sub":
			return num1 - num2;
		default:
			throw new IllegalArgumentException("Invalid Arith");
		}
	}

	@ExceptionHandler(value = IllegalArgumentException.class)
	public String handleEx(Throwable e) {
		return e.getMessage();
	}

}
