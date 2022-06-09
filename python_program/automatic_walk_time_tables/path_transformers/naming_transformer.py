import json

import requests

from automatic_walk_time_tables.path_transformers.path_transfomer import PathTransformer
from automatic_walk_time_tables.utils.path import Path


class NamingTransformer(PathTransformer):
    """
    Fetches the names for each point in the path.
    """

    def __init__(self):
        super().__init__()

    def transform(self, path_: Path) -> Path:
        for pt in path_.way_points:
            url = "http://swiss_tml:1848/swiss_name"

            lv95 = pt.point.to_LV95()
            payload = json.dumps([[lv95.lat, lv95.lon]])
            headers = {'Content-Type': 'application/json'}
            req = requests.request("GET", url, headers=headers, data=payload)
            resp = req.json()

            pt.name = resp[0]['swiss_name']

        return path_