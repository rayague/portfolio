"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// ... tout le code React et JSX de l'ancienne page form ici ... 