import axios from "axios";
import type {job } from "../types/job";

const API_BASE_URL="http://localhost:8000";

export async function getJob():Promise<job>{
    const response=await axios.get(`${API_BASE_URL}/job`);
    return response.data;
}

export async function getJobById(id: number):Promise<job>{
    const response=await axios.get(`${API_BASE_URL}/job/${id}`);
    return response.data;
}

export async function createJob(job: job):Promise<job>{
    const response=await axios.post(`${API_BASE_URL}/job`,job);
    return response.data;
}

export async function updateJob(id:string,job:job):Promise<void>{
    const response=await axios.put(`${API_BASE_URL}/job/${id}`,job);
    return response.data;
}
