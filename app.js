import express from 'express';
import mongodb from './app/db/mongodb';
import appInit from './app/config/app';

export async function init() {
   mongodb();
   appInit(express());
}

init();