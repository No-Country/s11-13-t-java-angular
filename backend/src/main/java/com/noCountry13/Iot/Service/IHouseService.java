package com.noCountry13.Iot.Service;

import com.noCountry13.Iot.Model.Entity.Dto.House.HouseDto;
import com.noCountry13.Iot.Model.Entity.House;

import java.util.List;

public interface IHouseService {
    HouseDto create(HouseDto houseDto);
    HouseDto update(HouseDto houseDto, Long id);
    void  delete(Long id);
    List<House> allHouse();
}
