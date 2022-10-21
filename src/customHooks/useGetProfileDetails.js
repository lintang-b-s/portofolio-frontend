import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileOneDetails } from "../actions/profileAction.js"

export function useGetProfileDetails(id) {
    const dispatch = useDispatch();
    const profileOneDetails = useSelector((state) => state.profileOneDetails)
    const { loading, error, profile } = profileOneDetails;

    useEffect(() => {
        dispatch(getProfileOneDetails(id));

    }, [dispatch, id]);

    return { loading, error, profile };
}