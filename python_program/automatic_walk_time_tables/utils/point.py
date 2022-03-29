from automatic_walk_time_tables.geo_processing import coord_transformation

class PointType:
    NONE = "NONE"
    LV03 = "LV03"
    WGS84 = "WGS84"

# Abstract Base class
class Point:
    def __init__(self, lat : float, lon : float, h : float = -1.0) -> None:
        self.lat = lat
        self.lon = lon
        self.h = h
        self.type = PointType.NONE

        # TODO: add name here

    def to_LV03(self):
        raise Exception("Not possible on base class.")
    def to_WGS84(self):
        raise Exception("Not possible on base class.")

    def has_elevation(self) -> bool:
        return self.h > 0.0 # assume switzerland, where there is no point below 0

    def __str__(self):
        return "Point: lat: " + str(self.lat) + ", lon: " + str(self.lon) + ", h: " + str(self.h)

    def __repr__(self):
        return self.__str__()

class Point_LV03(Point):
    """ LV03 coordinates """
    def __init__(self, lat : float, lon : float, h : float = -1.0) -> None:
        super().__init__(lat, lon, h)
        self.type = PointType.LV03

    def to_WGS84(self):
        """ convert LV95 to WGS84 """
        converter = coord_transformation.GPSConverter()
        wgs84 = converter.LV03toWGS84(self.lat, self.lon, self.h)
        return Point_WGS84(wgs84[0], wgs84[1], wgs84[2] if self.h != -1. else -1.0)
        # TODO: make sure that we copy over name etc.

    def to_LV03(self):
        """ convert LV03 to LV03 """
        return self

class Point_WGS84(Point):
    """ WGS84 coordinates """
    def __init__(self, lat : float, lon : float, h : float = -1.0):
        super().__init__(lat, lon, h)
        self.type = PointType.WGS84

    def to_LV03(self):
        """ convert WGS84 to LV03 """
        converter = coord_transformation.GPSConverter()
        lv03 = converter.WGS84toLV03(self.lat, self.lon, self.h)
        return Point_LV03(lv03[0], lv03[1], lv03[2] if self.h != -1. else -1.0)
        # TODO: make sure that we copy over name etc.


    def to_WGS84(self):
        """ convert WGS84 to WGS84 """
        return self