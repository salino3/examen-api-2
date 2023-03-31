import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene } from 'scenes';
import { MoreInfo } from 'scenes/MoreInfo';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characters}
          element={<CharacterCollectionScene />}
        />
        <Route path={switchRoutes.moreInfo} element={<MoreInfo />} />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characters} />}
        />
      </Routes>
    </HashRouter>
  );
};
