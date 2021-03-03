import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { get } from './utils';

import RestaurantDetail from './RestaurantDetail';
import { loadRestaurantDetail } from './actions';

export default function RestaurantDetailContainer() {
  const restaurantDetail = useSelector(get('restaurantDetail'));

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, [id]);

  return (
    <RestaurantDetail restaurantDetail={restaurantDetail} />
  );
}
