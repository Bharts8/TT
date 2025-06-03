"use client"

export function MicrosoftLicenseChart() {
  return (
    <div className="h-[300px] w-full">
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-sm bg-blue-600"></div>
                <span className="text-sm font-medium">Microsoft 365 E3</span>
              </div>
              <div className="text-sm">
                <span className="font-medium">685</span>
                <span className="text-muted-foreground"> / 720 licenses</span>
              </div>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-blue-600" style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-sm bg-purple-600"></div>
                <span className="text-sm font-medium">Microsoft 365 E5</span>
              </div>
              <div className="text-sm">
                <span className="font-medium">142</span>
                <span className="text-muted-foreground"> / 150 licenses</span>
              </div>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-purple-600" style={{ width: "94.7%" }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-sm bg-green-600"></div>
                <span className="text-sm font-medium">Microsoft 365 Business Premium</span>
              </div>
              <div className="text-sm">
                <span className="font-medium">98</span>
                <span className="text-muted-foreground"> / 120 licenses</span>
              </div>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-green-600" style={{ width: "81.7%" }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-sm bg-amber-600"></div>
                <span className="text-sm font-medium">Office 365 E1</span>
              </div>
              <div className="text-sm">
                <span className="font-medium">178</span>
                <span className="text-muted-foreground"> / 200 licenses</span>
              </div>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-amber-600" style={{ width: "89%" }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-sm bg-rose-600"></div>
                <span className="text-sm font-medium">Power BI Pro</span>
              </div>
              <div className="text-sm">
                <span className="font-medium">84</span>
                <span className="text-muted-foreground"> / 100 licenses</span>
              </div>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-rose-600" style={{ width: "84%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
