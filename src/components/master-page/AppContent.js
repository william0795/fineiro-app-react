import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// routes config
import routes from '../../routes'

const AppContent = () => {
  return (
    <div id="template-content" className="container-fluid content-master">
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            )
          )
        })}
        <Route path="/" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </div>
  )
}

export default React.memo(AppContent)
