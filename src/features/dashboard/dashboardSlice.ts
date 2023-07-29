import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { CasesWithDateType, ContryCovidDataType, CovidDataType } from 'types/dashboard';
import axios from 'axios';
import { AppThunk } from '../../redux/store'; // Define AppThunk if not already defined in your Redux store setup

interface ContactState {
    covidData: CovidDataType | null;
    contryCovidData: ContryCovidDataType[] | null;
    CasesWithDateData: CasesWithDateType[] | null;
}

const initialState: ContactState = {
    covidData: null,
    contryCovidData: null,
    CasesWithDateData:null,
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setCovidData: (state, action: PayloadAction<CovidDataType>) => {
            state.covidData = action.payload;
        },
        setContryCovidData: (state, action: PayloadAction<ContryCovidDataType[]>) => {
            state.contryCovidData = action.payload;
        },
        setCasesWithDate: (state, action: PayloadAction<CasesWithDateType[]>) => {
            state.CasesWithDateData = action.payload;
        },
    },
});

// Thunk for fetching CovidData
export const fetchCovidData = (): AppThunk => async (dispatch) => {
    try {
        const response = await axios.get<CovidDataType>('https://disease.sh/v3/covid-19/all');
        dispatch(setCovidData(response.data));
    } catch (error) {
        console.error('Error fetching Covid data:', error);
    }
};

// Thunk for fetching contryCovidData
export const fetchContryCovidData = (): AppThunk => async (dispatch) => {
    try {
        const response = await axios.get<ContryCovidDataType[]>('https://disease.sh/v3/covid-19/countries');
        dispatch(setContryCovidData(response.data));
    } catch (error) {
        console.error('Error fetching other data:', error);
    }
};

export const fetchCasesWithDateData = (): AppThunk => async (dispatch) => {
    try {
        const response = await axios.get<CasesWithDateType[]>('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        dispatch(setCasesWithDate(response.data));
    } catch (error) {
        console.error('Error fetching other data:', error);
    }
};

export const { setCovidData, setContryCovidData, setCasesWithDate } = dashboardSlice.actions;

export const selectCovidData = (state: RootState) => state.dashboard.covidData;
export const selectContryCovidData = (state: RootState) => state.dashboard.contryCovidData;
export const selectCasesWithDateData = (state: RootState) => state.dashboard.CasesWithDateData;

export default dashboardSlice.reducer;
