package com.example.searchSample3;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class SampleUser {
    @Id
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "number")
    private int number;
}
